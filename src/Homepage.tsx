import React from 'react';
const App = () => {
  const image = document.getElementsByClassName('homepageImg');
  function infoBoxDown(i:number){
    image[i].style.transition = "all 0.5s ease-in-out";
    image[i].style.transform = `scale(0.98)`;
    image[i].children[0].style.filter = `brightness(0.5)`;
    image[i].children[1].style.transform = `translate(0%,0%)`;    
  }
  function infoBoxUp(i:number){
    image[i].style.transition = "all 0.5s ease-in-out";
    image[i].style.transform = `scale(1)`;
    image[i].children[0].style.filter = `brightness(1)`;
    image[i].children[1].style.transform = `translate(0%,-101%)`;
  }
  return (
    <main>
        <section className=''>
          <h1 className='header'>Welcome to the ultimate personal assistant;</h1>
          <p className='description'>Introducing Persistant – Your Ultimate Personal Assistant!
            Efficiency redefined with Persistant – your dedicated companion for seamless task management. Say goodbye to stress and hello to productivity!
          </p>
          <div className='pictureContainer'>
            <article className='thumbnail homepageImg' onPointerEnter={() => infoBoxDown(0)} onPointerLeave={() => infoBoxUp(0)}><img src="./Images/happythroughpersistant.jpg" alt="" />
              <div className='pictureDetails'>
                <h1 className='first-article'>Sign Up NOW!</h1><br />
                <p>
                Unlock success through persistence with Persistant – your dedicated ally for seamless task management. Seamlessly integrated into your lifestyle, Persistant empowers you to conquer challenges and achieve your goals. Ready to experience the difference? Sign up now and take the first step towards a more organized, efficient, and empowered you!</p>
              </div>
            </article>
            <article className='tabThumbnail homepageImg' onPointerEnter={() => infoBoxDown(1)} onPointerLeave={() => infoBoxUp(1)}><img src="./Images/focus.jpeg" alt="" />
              <div className='pictureDetails'>
                <h1>Discover Focus Mode with Persistant</h1>
                <p>Elevate your productivity with the Pomodoro Technique integrated seamlessly into Persistant. Stay focused, manage tasks effectively, and achieve more in less time. Try it now!</p>
                </div>
              </article>
            <article className='tabThumbnail homepageImg' onPointerEnter={() => infoBoxDown(2)} onPointerLeave={() => infoBoxUp(2)}><img src="./Images/nomoredaysofsuffering.jpeg" alt="" />
              <div className='pictureDetails'>
                <h1>To-Do & Expense Tracker</h1>
                <p> Manage your tasks and expenses with ease. </p>
              </div>
            </article>
            <article className='tabThumbnail homepageImg' onPointerEnter={() => infoBoxDown(3)} onPointerLeave={() => infoBoxUp(3)}><img src="./Images/weatherapp.jpeg" alt="" />
            <div className='pictureDetails'>
              <h1>Weather management made simple</h1>
              <p>Stay informed with real-time updates, plan your activities, and never be caught off guard</p>
              </div>
            </article>
          </div>
          <div className='pictureContainerMobile'>
            <article className='thumbnailMobile homepageImgMobile' onPointerEnter={() => infoBoxDown(0)} onPointerLeave={() => infoBoxUp(0)}>
              
                <h1 className='first-article'>Sign Up NOW!</h1><br />
                <p>
                Unlock success through persistence with Persistant – your dedicated ally for seamless task management. Seamlessly integrated into your lifestyle, Persistant empowers you to conquer challenges and achieve your goals. Ready to experience the difference? Sign up now and take the first step towards a more organized, efficient, and empowered you!</p>
                <img src="./Images/happythroughpersistantMobile.jpg" alt="" />
              
            </article>
            <article className='tabThumbnailMobile homepageImgMobile' onPointerEnter={() => infoBoxDown(1)} onPointerLeave={() => infoBoxUp(1)}>
              
                <h1>Discover Focus Mode with Persistant</h1>
                <p>Elevate your productivity with the Pomodoro Technique integrated seamlessly into Persistant. Stay focused, manage tasks effectively, and achieve more in less time. Try it now!</p>
                
                <img src="./Images/focus.jpeg" alt="" />
              </article>
            <article className='tabThumbnailMobile homepageImgMobile' onPointerEnter={() => infoBoxDown(2)} onPointerLeave={() => infoBoxUp(2)}>
              
                <h1>To-Do & Expense Tracker</h1>
                <p> Manage your tasks and expenses with ease. </p>
                <img src="./Images/nomoredaysofsuffering.jpeg" alt="" />
              
            </article>
            <article className='tabThumbnailMobile homepageImgMobile' onPointerEnter={() => infoBoxDown(3)} onPointerLeave={() => infoBoxUp(3)}>
            
              <h1>Weather management made simple</h1>
              <p>Stay informed with real-time updates, plan your activities, and never be caught off guard</p>
              <img src="./Images/weatherapp.jpeg" alt="" />
              
            </article>
          </div>
        </section>
    </main>
  )
}
export default App
