import './App.css';

function App() {
  const click=()=>{
    if ("Notification" in window && "vibrate" in navigator) {
      // Request permission to show notifications
      Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
              // Create a new notification
          
              var notification;
              setTimeout(() => {
               notification = new Notification("New Message", {
                      body: "You have a new message",
                  });
              }, 3000);

              // Vibrate the device
              navigator.vibrate([200, 100, 200]);

              // Handle click on the notification
              notification.onclick = function () {
                  // Handle the click event
                  alert(1)
              };
          }
      });
  }
  }
  return (
    <div className='app'>
      <h1>test notif</h1>
      <button onClick={()=>click()}>click to send notif</button>
    </div>
  );
}

export default App;
