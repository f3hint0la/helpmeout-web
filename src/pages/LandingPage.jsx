import styles from "../styles/landingpage.module.scss";
import NavBar from "../components/Footer";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import heroImage1 from "../assets/hero1.png";
import heroImage2 from "../assets/hero2.png";
import heroImage3 from "../assets/hero3.png";
import featImage1 from "../assets/record-circle.png";
import featImage2 from "../assets/send.svg";
import featImage3 from "../assets/refresh-square-2.svg";
import vector from "../assets/vector.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.landingPage}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1>
              <span>Show Them</span>
              <span>Don’t Just Tell</span>
            </h1>
            <p>
              Help your friends and loved ones by creating and sending
              <span> videos on how to get things done on a website.</span>
            </p>
            <button>
              <Link>
                Install HelpMeOut <AiOutlineArrowRight />
              </Link>
            </button>
          </div>
          <div className={styles.images}>
            <div className={styles.item1}>
              <img src={heroImage1} alt="heroImage1" />
              <img src={heroImage2} alt="heroImage2" />
            </div>

            <div className={styles.item2}>
              <img src={heroImage3} alt="heroImage3" />
            </div>
          </div>
        </div>

        <div className={styles.break}></div>

        <div className={styles.features}>
          <div className={styles.heading}>
            <h2>Features</h2>
            <h3>Key Highlights of Our Extension</h3>
          </div>

          <div className={styles.details}>
            <div className={styles.content}>
              <div className={styles.feat}>
                <div className={styles.placeholder}>
                  <img src={featImage1} alt="featImage1" />
                </div>

                <div className={styles.info}>
                  <h3>Simple Screen Recording</h3>
                  <p>
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </div>

              <div className={styles.feat}>
                <div className={styles.placeholder}>
                  <img src={featImage2} alt="featImage2" />
                </div>

                <div className={styles.info}>
                  <h3>Easy-to-Share URL</h3>
                  <p>
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </div>

              <div className={styles.feat}>
                <div className={styles.placeholder}>
                  <img src={featImage3} alt="featImage3" />
                </div>

                <div className={styles.info}>
                  <h3>Revisit Recordings</h3>
                  <p>
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.image}></div>
          </div>
        </div>

        <div className={styles.break}></div>

        <div className={styles.how}>
          <div className={styles.heading}>
            <h2>How It Works</h2>
          </div>

          <div className={styles.content}>
            <div className={styles.item}>
              <span>1</span>
              <h3>Record Screen</h3>
              <p>
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
              <img src={vector} alt="vector" />
            </div>

            <div className={styles.item}>
              <span>2</span>
              <h3>Share Your Recording</h3>
              <p>
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </p>
              <img src={vector} alt="vector" />
            </div>

            <div className={styles.item}>
              <span>3</span>
              <h3>Learn Effortlessly</h3>
              <p>
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>
              <img src={vector} alt="vector" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default LandingPage;
