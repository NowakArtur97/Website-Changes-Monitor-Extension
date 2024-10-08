const URLS = ["https://anitaku.pe/home.html"];

chrome.alarms.create("monitor", {
  delayInMinutes: 1 / 60,
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "monitor") {
    console.log("beep");
  }
});
