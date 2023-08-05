import ArticleNavBar from "../components/ArticleNavBar.jsx";
import thismymob from "../assets/img/tmm.png";

const ThisMyMob = () => {

  window.scrollTo(0,0);

  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4 px-6">
      <ArticleNavBar/>
      <article>
        <h2>#thisMyMob: A Social Network for Indigenous Australians</h2>
        <img src={thismymob} className="article-hero" alt="thisMyMob: A Social Network for Indigenous Australians"/>
        <section>
          <p>
            The #thisMyMob project is a collaborative effort between UTS:Rapido Social and UTS’s own Centre for
            Indigenous Technology Research and Development, led by Dr Christopher Lawrence. The research project’s aim
            was to develop an app where Indigenous users can connect and discuss culturally relevant topics without
            fear of digital racism, abuse and violence. The app also aimed to be a platform for businesses and
            government services to distribute information that was relevant to the Indigenous community such as
            announcements of various Indigenous programmes, relevant government grants, etc.
          </p>
          <p>
            The application featured two halves that made up the platform. A mobile app targeted for the Indigenous end
            user and an administration system. The mobile app gave its users access to a news feed where they could
            post updates as well as see updates from other users. Users were also able to access their own ‘mob’s
            specific private chat as well as a gender specific chat as it was found to be highly culturally significant
            to the Indigenous community. A notification system was also implemented to let users know when their posts
            were liked and commented on. Finally there was an Information Portal section that allows users to browse
            articles that were relevant to their selected category such as Sports, Health, Employment, Education, etc.
          </p>
          <p>
            The administration system served two purposes. To allow businesses and external entities to publish
            articles that were relevant to the Information portal and to allow the researchers of the #thisMyMob
            project to perform administration duties such as moderating posts, adding new users (as the project is
            currently only open to a small test group), creating new participating mobs and finally moderating and
            approving articles created by external entities for publishing on the Information Portal.
          </p>
        </section>
        <section>
          <h3>Technology</h3>
          <p>
            React, React Route, Redux, Redux-Forms, Firebase, Google Cloud Platform, Firebase Cloud Messaging, Firebase
            Functions, Semantic UI
          </p>
        </section>
        <section>
          <h3>Media</h3>
          <ul>
            <li>📰
              <a
                className="link"
                href="https://www.uts.edu.au/about/faculty-engineering-and-information-technology/news/safe-digital-platform-indigenous-communities">
                A safe digital platform for Indigenous communities
              </a>
            </li>
            <li>📰
              <a
                className="link"
                href="https://socialimpact.uts.edu.au/case-study/connecting-indigenous-people-and-keeping-heritage-alive-thismymob/ThisMyMob.jsx">
                Connecting Indigenous people and keeping heritage alive
              </a>
            </li>
            <li>📺
              <a
                className="link"
                href="https://www.youtube.com/watch?v=ezAa01UsdkY">
                #thismymob: The first ever app connecting Indigenous people digitally
              </a>
            </li>
            <li>📰
              <a
                className="link"
                href="https://www.uts.edu.au/about/faculty-engineering-and-information-technology/news/new-role-support-indigenous-led-technology-development">
                New role to support Indigenous-led technology development
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
};

export default ThisMyMob;
