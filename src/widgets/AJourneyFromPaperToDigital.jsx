import {Link} from 'react-router-dom';

import ArticleNavBar from '../components/ArticleNavBar.jsx';
import tkssir from '../assets/img/tkssir.png';

const AJourneyFromPaperToDigital = () => {
  window.scrollTo(0, 0);

  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4 px-6">
      <ArticleNavBar/>
      <article>
        <h2>A Journey from Paper to Digital</h2>
        <img src={tkssir} className="article-hero" alt="A Journey from Paper to Digital" />
        <section>
          <h3>Introduction</h3>
          <p>
            The TKSSIR System is an application that was built for the Thomas Kelly Foundation to support their team
            members in reporting incidents that they encounter and record the assistance they provided to their clients.
            To read more about the organisation with a breif overview of the app, see here <Link className="link" to="/work/tkssir">TKSSIR: Helping reduce
            alcohol related violence in Sydney</Link>.
          </p>
        </section>
        <section>
          <h3>Challenges</h3>
          <section>
            <h4>Inheriting Projects...</h4>
            <p>
              Truth be told, this project was actually inherited from a previous colleague who had left the
              organisation. The initial V1 of the SSIR was built with a ReactJS front end and Firebase stack. However
              it lacked a unified design.
            </p>
            <p>
              There were no shared design elements such as buttons, headings, table layouts, etc. Instead it was mostly
              just text buttons and randomly imported npm packages for tables to display rows of data. Mobile
              responsive layouts were basically non-existent (save for Bootstrap) and offline Service Worker and data
              caching was also not implemented.
            </p>
            <p>
              While the application functioned, it was extremely user unfriendly which raised barriers for adoption and
              made it frustrating for the teams of volunteers who needed to use the application on the go. So going in,
              the code base was not the cleanest, design needed redoing before any new features could be built.
            </p>
            <p>
              Right then, to work! 💪
            </p>
            <p>
              A colleague who was also working on web development at the time pointed me in the direction of Semantic
              UI. CSS Frameworks are nothing new but this one offered its components in nicely wrapped React components.
              You need a button? A table? Form Fields? All available and configurable. All you needed to do was pass in
              some properties to configure it! Magic ✨✨✨ Having a configurable, prebuilt design
              system was extremely valuable in speeding up the UI process even if it means a little inflexibility
              further down the track. This saved me time as I didn’t have to come up with my own design system from
              scratch. Unified design? Solved!
            </p>
            <p>
              But since all the components are now essentially Semantic-UI components, the application needed to be
              reworked. The organisation of the code was not laid out very well as I slowly discovered. The placement
              of many components was not ideal and became very difficult to untangle. So I made the decision to build
              the project out again from scratch in a new create-react-app project. I took what I could use in terms of
              code patterns from V1 of the project but eventually everything was replaced by my own designs from the
              way Firebase was integrated into the React project, how authentication, authorization and routing was
              handled, how data was stored within the app, etc.
            </p>
          </section>
          <section>
            <h4>Understanding Your Users</h4>
            <p>
              After laying the groundwork for the new version of SSIR and bringing forward much of the existing
              functionality of the original app, I showed the new version to the team leader of the Take Kare program at
              the time, Michael. He was extremely pleased with the new design, citing how much easier it was to use. He
              had informed me that V1 of the app was so clunky and hard to use, his team went right back to using the
              paper forms as it was still easier to fill in and collect at the end of the day.
            </p>
            <p>
              On the first night, Michael gave some feedback for the app which was quickly implemented and brought back
              the next weekend for more feedback. This kicked off a cycle of working closely with their volunteer teams
              on their operating nights (Fridays and Saturdays) where I would participate in their volunteer teams,
              observe how they used the latest iteration of the SSIR, listened to how they would most likely use it in
              their scenarios and then go back to implement their feedback for the next week.
            </p>
            <p>
              Having this interactive feedback from your users was extremely valuable and led to the development of
              several key features that, in turn, drove adoption by the volunteer teams. Some were complex features such
              as a live, real-time tally of the number of clients being supported in their Safe Space tents and linking
              many clients to a single incident, something that was not possible on their paper forms. Some simple
              features such as showing a list of incident forms that had not been filled out completely at the end of a
              shift. Features like these that would have never occurred to me improved usability for the teams greatly.
            </p>
          </section>
        </section>
        <section>
          <h3>Technology</h3>
          <p>
            Vue, Node.js, Koa, Tailwind CSS, VueX, Vue Router, SCSS, Echarts
          </p>
        </section>
      </article>
    </div>
  );
};

export default AJourneyFromPaperToDigital;
