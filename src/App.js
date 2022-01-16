import './App.css';
import LinkBox from './modules/linkbox';
import LinkIcon from './modules/linkicon';
import { faDiscord, faTelegram, faTwitter, faFacebook, faInstagram, faTiktok, faTwitch, faLinkedin, faBitcoin, faMonero, faEthereum, faPaypal, faJenkins, faGitAlt, faGithub, faDocker, faSteam, faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import TwitchEmbed from './modules/twitchEmbed';
import photo from './assets/photo.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img class="App-photo" src={photo} alt="Profile" />
        <p class="App-name">Philip Mooney</p>
        <div class="App-linkicon-container">
          <LinkIcon
            alt="Discord"
            favicon={faDiscord}
            link="https://discord.gg/by49fPVgk9"
          />
          <LinkIcon
              alt="Telegram"
              favicon={faTelegram}
              link="https://t.me/philip_mooney"
          />
          <LinkIcon
              alt="Email"
              favicon={faAt}
              link="mailto:contact@philipmooney.com"
          />
          <LinkIcon
              alt="LinkedIn"
              favicon={faLinkedin}
              link="https://www.linkedin.com/in/philipcmooney/"
          />
          <LinkIcon
              alt="Twitter"
              favicon={faTwitter}
              link="https://twitter.com/philip_mooney"
          />
          <LinkIcon
              alt="Facebook"
              favicon={faFacebook}
              link="https://www.facebook.com/philipcmooney"
          />
          <LinkIcon
              alt="Instagram"
              favicon={faInstagram}
              link="https://instagram.com/philip.c.mooney"
          />
          <LinkIcon
            alt="TikTok"
            favicon={faTiktok}
            link="https://tiktok.com/@philipmooney"
          />
        </div>
        <div class="App-linkicon-container">
          <LinkIcon
              alt="Twitch"
              favicon={faTwitch}
              link="https://twitch.tv/philipmooney"
          />
          <LinkIcon
            alt="Steam"
            favicon={faSteam}
            link="https://steamcommmunity.com/"
          />
          {/* <LinkIcon
            alt="Xbox"
            favicon={faXbox}
            link="https://philipmooney.com"
          />
          <LinkIcon
            alt="PlayStation"
            favicon={faPlaystation}
            link="https://philipmooney.com"
          /> */}
        </div>
        <div class="App-linkicon-container">
          {/* <LinkIcon
            alt="Jenkins"
            favicon={faJenkins}
            link="https://tiktok.com/@philipmooney"
          /> */}
          <LinkIcon
            alt="Git"
            favicon={faGitAlt}
            link="https://gitea.philipmooney.com"
          />
          <LinkIcon
            alt="GitHub"
            favicon={faGithub}
            link="https://github.com/philip_mooney"
          />
          <LinkIcon
            alt="Docker"
            favicon={faDocker}
            link="https://hub.docker.com/philipmooney"
          />
        </div>
        <div class="App-linkicon-container">
          {/* <LinkIcon
            alt="Revolut"
            favicon={faRevolut}
          /> */}
          <LinkIcon
            alt="PayPal"
            favicon={faPaypal}
          />
          <LinkIcon
            alt="Bitcoin"
            favicon={faBitcoin}
          />
          <LinkIcon
            alt="Ethereum"
            favicon={faEthereum}
          />
          <LinkIcon
            alt="Monero"
            favicon={faMonero}
          />
        </div>
        <div class="App-linkbox-container">
          <LinkBox
            text="Plex"
            link="https://plex.philipmooney.com"
          />
          <LinkBox
            text="Overseerr"
            link="https://overseerr.philipmooney.com"
          />
          <LinkBox
            text="Tautulli"
            link="https://tautulli.philipmooney.com"
          />
          <LinkBox
            text="Nextcloud"
            link="https://nextcloud.philipmooney.com"
          />
        </div>
        {/* <TwitchEmbed/> */}
      </header>
    </div>
  );
}

export default App;
