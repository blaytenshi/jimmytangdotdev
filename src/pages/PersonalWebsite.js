  import React from "react";
import ArticleNavBar from "../components/ArticleNavBar";
import Twemoji from "../components/Twemoji";

const PersonalWebsiteV1 = () => {
  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4 px-6 text-gray-700">
      <ArticleNavBar/>
      <article>
        <h2 className="text-3xl font-bold text-red-600">Revisiting CSS and Design after more than a decade</h2>
        <section className="py-2">
          <h3 className="text-2xl font-bold ">Background</h3>
          <p className="py-2">
            After my stint with Grow Super came to an unfortunate end (thanks COVID-19), it was time to saddle up and 
            go out venturing for work once again! Having met so many engineers at Grow, all of them being exceptionally 
            talented and supportive, I noticed that I was one of the few without a personal website dedicated to my 
            work and projects. I figured that in order to get noticed more by potential employers and recruiters, it 
            was finally time to build my own! Now, I consider myself a Front End Engineer... How hard could it be...
            <Twemoji emoji="🤔" />?
          </p>
        </section>
        <section className="py-2">
          <h3 className="text-2xl font-bold">Thoughts</h3>
          <p className="py-2">
            As it turns out! Quite hard! But not for the reasons you might think...
          </p>
          <p className="py-2">
            Now, of course, I've had ones in the past. But the last time I made one from scratch was back in High 
            School. It was built purely out of HTML and CSS and uploaded through FTP onto a Geocity domain. Ahh good
            old days... in that version there was absolutely no regard for HTML, CSS conventions. 
            
            "This time, it'll be different. I'll apply the lessons I learnt in my brief stint at Grow!" I said to 
            myself, not realising the work that'll be involved.
          </p>
          <h4 className="text-xl font-bold">Choosing my stack...</h4>
          <p className="py-2">
            Whilst at Grow, we were a Vue shop. Prior to Grow, I was in the world of React. Whilst I loved Vue for it's
            structure and simplicity (something I'll get into in another post), React was my first SPA framework and as
            idiom goes: "You never forget your first <Twemoji emoji="❤" />". Besides, Sydney is a React scene so of
            course it made sense to build my front end out of React!
          </p>
          <p className="py-2">
            Hosting and back end were an easy choice too. My experience with Firebase made it the go to solution. 
            Deployment through the Firebase CLI is a breeze and hosting is free! I didn't want to have to spin up an AWS 
            instance and set up a whole new infrastructure for a simple portfolio site. A) I didn't have time to learn it 
            and B) That'd be like taking a sledgehammer to tap a nail into the wall.
          </p>
          <p className="py-2">
            The final piece of the puzzle was of course, CSS and design. At Grow, our fender's team centered around 
            TailwindCSS for styling. Tailwind is a brilliant utility-first CSS framework that greatly simplifies the CSS that you
            have to write. However, when it came to me and my own abilities, this was where I ran into the two caveats:
          </p>
          <ol>
            <li>a) You should know what it is you're trying to build, ie: you should have a design in mind</li>
            <li>b) You should know your CSS already so you know which Tailwind classes to apply</li>
          </ol>
          <p className="py-2">
            learnt
            css positioning
            transitions
            box-model
            flex box layouts
            grid layouts
            svgs
            emoji standards
            responsive designs
            semantic html
          </p>
        </section>
        <section className="py-2">
          <h3 className="text-2xl font-bold">Technology</h3>
          <p className="py-2">
            React, Firebase, Tailwind CSS, CSS
          </p>
        </section>
      </article>
    </div>
  )
};

export default PersonalWebsiteV1;