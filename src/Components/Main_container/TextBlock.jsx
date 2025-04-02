import Background from "./Background.module.css";


function TextBlock() {
  return (
    <>
      <div className={`${Background.txtblock}`}>
        <h1 className={`2xl:text-9xl xl:text-8xl lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl ${Background.txtUnlock}`}> <i className=' 2xl:text-9xl bx bxs-hot' ></i>Unlock Your True Potential<br /> </h1>


        <p className={`2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-lg ${Background.txtblockPr}`}
        >Your skills are just waiting to shine. Whether you're stuck in a rut or aiming for the top, our Dota 2 MMR boosting service will help you break through the barriers.<br /><br />Why waste time struggling through frustrating matches when you can fast-track your progress? Our personalized approach ensures that you not only climb the ranks but also grow as a player. Whether you're aiming for a higher rank or refining your skills, we tailor the experience to your unique needs. With us, every game becomes a stepping stone toward mastery. Join the thousands of players who have unlocked their true potential and left mediocrity behind. <br /> <br /> With expert players on your side, you'll not only rank up but also gain insights to dominate every match. Stop settling for less—unlock your true potential and become the player you were meant to be."
        </p>
        <div className={`${Background.Credits}`}>
          {/* <a href="https://7wallpapers.net/wp-content/uploads/3_Dota2-Spectre.jpg" id={Background.michi}>&copy;Michiming</a>
          <a href="https://7wallpapers.net/wp-content/uploads/3_Dota2-Spectre.jpg">&copy;hekk</a>
          <a href="https://www.youtube.com/@4fun911"> &copy;4fun</a> */}
        </div>

      </div>
      <footer className={`${Background.txtblockFoot}`}>Created With 🧡 By&nbsp;<a className={`${Background.buluba}`} href="https://www.facebook.com/profile.php?id=61562348362536"> Francis</a></footer>

    </>
  )
}

export default TextBlock;