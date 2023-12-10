
const Notif = () => {
    const clickToNotification = () => {
        Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
                new Notification("this is an example", {
                    body: "this is more text for test",


                })
            }
        })
        navigator.vibrate([500,400,300])
    }

    // when user get out from site send notif
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            new Notification("come back please", {
                body: "pleaseeeee",
                tag: "come back"
            })
        }
    })
 
    return (
        <div>
            <h1>دریافت نوتیف saasdsadsad</h1>
            <button onClick={() => clickToNotification()}>notif</button>
        </div>
    )
}
export default Notif