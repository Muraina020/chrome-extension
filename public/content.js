console.log("Hi, I have been injected whoopie!!!");

var recorder = null;

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

//   recorder.onstop = function () {
//     stream.getTracks().forEach(function (track) {
//       if (track.readyState === "live") {
//         track.stop();
//       }
//     //   window.location.href = "https://www.google.com/";
//     });
//   };
recorder.onstop = function () {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const videoId = generateUniqueVideoId();
    const fileName = `screen-recording-${videoId}.webm`;
    const formData = new FormData();
    formData.append("video", blob, fileName);
    const fileReader = new FileReader();
    fileReader.onload = function () {
      const base64Data = fileReader.result;
      console.log(base64Data);
      // const apiUrl = "https://stage5-4qe0.onrender.com/upload"
      const apiUrl = "http://localhost:3000/upload";
      fetch(apiUrl, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Response is not JSON');
          }
          return response.json();
        })
        .then((data) => {
          console.log("Video uploaded successfully:", data);
          console.log(formData)
          const newPageUrl = 'http://localhost:3001/home/';
          window.open(newPageUrl, "_blank");
        })
        .catch((error) => {
          console.error("Error uploading video:", error);
        });
    };
    fileReader.readAsDataURL(blob);
    recordedChunks = [];
  };














  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    let url = URL.createObjectURL(recordedBlob);

    let a = document.createElement("a");

    a.style.display = "none";
    a.href = url;
    a.download = "screen-recording.webm";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("Requesting recording");

    sendResponse(`Processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 1920, // Set the desired width
          height: 1080, // Set the desired height
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      })
      .catch((error) => {
        console.error("Error accessing user's screen and microphone:", error);
      });
  }

  if (message.action === "stopvideo") {
    console.log("Stopping video");
    sendResponse(`Processed: ${message.action}`);
    if (!recorder) return console.log("No recorder");

    recorder.stop();
  }
});



