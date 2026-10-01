import 'react-router-dom';
const App = () => {
  const image = document.getElementsByClassName(
    "homepageImg"
  ) as HTMLCollectionOf<HTMLElement>; //importing images

  function infoBoxDown(i: number) { //animation start trigger
    image[i].style.transition = "all 0.5s ease-in-out";
    image[i].style.transform = `scale(0.98)`;
    (image[i].children[0] as HTMLElement).style.filter = `brightness(0.5)`;
    (image[i].children[1] as HTMLElement).style.transform = `translate(0%,0%)`;
  }

  function infoBoxUp(i: number) { //animation end trigger
    image[i].style.transition = "all 0.5s ease-in-out";
    image[i].style.transform = `scale(1)`;
    (image[i].children[0] as HTMLElement).style.filter = `brightness(1)`;
    (
      image[i].children[1] as HTMLElement
    ).style.transform = `translate(0%,-101%)`;
  }
  return (
    <section aria-labelledby="welcome-header">
  <h1 id="welcome-header" className="header">Welcome to the ultimate personal assistant</h1>
  <p className="description">
    Introducing Persistant – Your Ultimate Personal Assistant! Efficiency
    redefined with Persistant – your dedicated companion for seamless task
    management. Say goodbye to stress and hello to productivity!
  </p>
  
  <div className="pictureContainer" role="list">
    <a href="/signup" className="articles thumbnail homepageImg" role="listitem" onPointerEnter={() => infoBoxDown(0)} onPointerLeave={() => infoBoxUp(0)}>
      <img src="./Images/happythroughpersistant.jpg" alt="Happy person using Persistant" />
      <div className="pictureDetails">
        <h1 className="first-article">Sign Up NOW!</h1>
        <p>
          Unlock success through persistence with Persistant – your
          dedicated ally for seamless task management. Seamlessly integrated
          into your lifestyle, Persistant empowers you to conquer challenges
          and achieve your goals. Ready to experience the difference? Sign
          up now and take the first step towards a more organized,
          efficient, and empowered you!
        </p>
      </div>
    </a>
    
    <a href="/focus" className="articles tabThumbnail homepageImg" role="listitem" onPointerEnter={() => infoBoxDown(1)} onPointerLeave={() => infoBoxUp(1)}>
      <img src="./Images/focus.jpeg" alt="Person focusing on work" />
      <div className="pictureDetails">
        <h1>Discover Focus Mode with Persistant</h1>
        <p>
          Elevate your productivity with the Pomodoro Technique integrated
          seamlessly into Persistant. Stay focused, manage tasks
          effectively, and achieve more in less time. Try it now!
        </p>
      </div>
    </a>
    
    <a href="/todo" className="articles tabThumbnail homepageImg" role="listitem" onPointerEnter={() => infoBoxDown(2)} onPointerLeave={() => infoBoxUp(2)}>
      <img src="./Images/nomoredaysofsuffering.jpeg" alt="Organized task list" />
      <div className="pictureDetails">
        <h1>To-Do & Expense Tracker</h1>
        <p>Manage your tasks and expenses with ease.</p>
      </div>
    </a>
    
    <a href="/weather" className="articles Tabthumbnail homepageImg" role="listitem" onPointerEnter={() => infoBoxDown(3)} onPointerLeave={() => infoBoxUp(3)}>
      <img src="./Images/weatherapp.jpeg" alt="Weather forecast display" />
      <div className="pictureDetails">
        <h1>Weather management made simple</h1>
        <p>
          Stay informed with real-time updates, plan your activities, and
          never be caught off guard
        </p>
      </div>
    </a>
  </div>
  <div className="pictureContainerMobile" role="list">
  <article className="thumbnailMobile homepageImgMobile" role="listitem">
    <h1 className="first-article">Sign Up NOW!</h1>
    <p>
      Unlock success through persistence with Persistant – your dedicated
      ally for seamless task management. Seamlessly integrated into your
      lifestyle, Persistant empowers you to conquer challenges and achieve
      your goals. Ready to experience the difference? Sign up now and take
      the first step towards a more organized, efficient, and empowered
      you!
    </p>
    <img src="./Images/happythroughpersistantMobile.jpg" alt="Happy person using Persistant on mobile" />
  </article>

  <article className="tabThumbnailMobile homepageImgMobile" role="listitem">
    <h1>Discover Focus Mode with Persistant</h1>
    <p>
      Elevate your productivity with the Pomodoro Technique integrated
      seamlessly into Persistant. Stay focused, manage tasks effectively,
      and achieve more in less time. Try it now!
    </p>
    <img src="./Images/focus.jpeg" alt="Person focusing on work using mobile app" />
  </article>

  <article className="tabThumbnailMobile homepageImgMobile" role="listitem">
    <h1>To-Do & Expense Tracker</h1>
    <p>Manage your tasks and expenses with ease.</p>
    <img src="./Images/nomoredaysofsuffering.jpeg" alt="Mobile app showing organized task list and expense tracker" />
  </article>

  <article className="tabThumbnailMobile homepageImgMobile" role="listitem">
    <h1>Weather management made simple</h1>
    <p>
      Stay informed with real-time updates, plan your activities, and
      never be caught off guard
    </p>
    <img src="./Images/weatherapp.jpeg" alt="Mobile weather app interface" />
  </article>
</div>
</section>
  );
};
export default App;
