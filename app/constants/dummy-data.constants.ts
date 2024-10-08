export const COURSES_DATA = [
  {
    id: 1,
    appxCourseId: "1",
    discordRoleId: "2",
    title: "test course 1",
    imageUrl: "https://appx-recordings.s3.ap-south-1.amazonaws.com/drm/100x/images/test1.png",
    description: "test course 1",
    openToEveryone: false,
    slug: "test-course-1",
    discordOauthUrl: "",
    certIssued: false,
  },
  {
    id: 2,
    appxCourseId: "2",
    discordRoleId: "3",
    title: "test course 2",
    imageUrl: "https://appx-recordings.s3.ap-south-1.amazonaws.com/drm/100x/images/test2.png",
    description: "test course 2",
    openToEveryone: false,
    slug: "test-course-2",
    discordOauthUrl: "",
    certIssued: false,
  },
]

export const CHAPTERS_DUMMY_DATA = [
  { title: "What is Promise?", timeStamp: "00:10", start: 0, end: 10 },
  { title: "Callback Hell", timeStamp: "04:00", start: 10, end: 40 },
  { title: "Promise.all", timeStamp: "09:00", start: 40, end: 90 },
  { title: "Promise.race", timeStamp: "12:00", start: 90, end: 120 },
  { title: "Promise.any", timeStamp: "15:00", start: 120, end: 150 },
  { title: "Chaining Promises", timeStamp: "18:00", start: 150, end: 180 },
  { title: "Promise.allSettled", timeStamp: "21:00", start: 180, end: 210 },
  { title: "Promise.prototype.finally", timeStamp: "24:00", start: 210, end: 240 },
  { title: "Why use Promises?", timeStamp: "27:00", start: 240, end: 270 },
  { title: "What are async/await?", timeStamp: "30:00", start: 270, end: 300 },
  { title: "Async/await in depth", timeStamp: "33:00", start: 300, end: 330 },
  {
    title: "Async/await with async generators Async/await with async generators",
    timeStamp: "36:00",
    start: 330,
    end: 360,
  },
  { title: "Error handling with async/await", timeStamp: "39:00", start: 360, end: 390 },
  { title: "Concurrency with async/await", timeStamp: "42:00", start: 390, end: 420 },
  { title: "Cancellation with async/await", timeStamp: "45:00", start: 420, end: 450 },
  { title: "Using async/await with React", timeStamp: "48:00", start: 450, end: 480 },
]

export const SECTIONS_DATA = [
  { title: "Today", data: [{}, {}] },
  { title: "Yesterday", data: [{}, {}, {}] },
  { title: "26 Sep", data: [{}, {}] },
  { title: "23 Sep", data: [{}] },
  { title: "22 Sep", data: [{}] },
]
