import React, {useState} from "react";
import n from "./header.module.css"
import Menu from "./BurgerMenu/Menu";
import login from "../../img/Login.svg"
import Politeh from "../../img/politeh.jpg";



const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
    const items = [{value: "Проекты"
        , href: "/"
        , icon: <svg width="75" height="60" viewBox="0 0 75 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9.29577C0 4.16186 4.16186 0 9.29578 0H27.8873C33.0213 0 37.1831 4.16186 37.1831 9.29578V56.7042C37.1831 61.8381 33.0213 66 27.8873 66H9.29578C4.16186 66 0 61.8381 0 56.7042V9.29577Z" fill="#DABC53"/>
            <path d="M4.64789 10.2253C4.64789 7.65839 6.72882 5.57745 9.29578 5.57745H64.4507C67.0177 5.57745 69.0986 7.65838 69.0986 10.2253V57.3239C69.0986 59.8909 67.0177 61.9718 64.4507 61.9718H9.29578C6.72883 61.9718 4.64789 59.8909 4.64789 57.3239V10.2253Z" fill="white"/>
            <path d="M0 19.5211C0 14.3872 4.16186 10.2253 9.29578 10.2253H65.0704C70.2044 10.2253 74.3662 14.3872 74.3662 19.5211V56.7042C74.3662 61.8382 70.2044 66 65.0704 66H9.29578C4.16186 66 0 61.8382 0 56.7042V19.5211Z" fill="#FFC737"/>
            <path d="M31.6057 14.8732C31.6057 9.73931 35.7675 5.57745 40.9014 5.57745H65.3803C70.5142 5.57745 74.6761 9.73932 74.6761 14.8732V42.7606C74.6761 47.8945 70.5142 52.0563 65.3803 52.0563H40.9014C35.7675 52.0563 31.6057 47.8945 31.6057 42.7606V14.8732Z" fill="#FFC737"/>
        </svg>
    },{value: "О нас"
        , href: "/"
        , icon: <svg width="66" height="60" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="33" cy="33" r="31.5" fill="#FFC737" stroke="white" stroke-width="3"/>
            <path d="M29.4261 40.5297C29.4261 38.5746 29.6635 37.0176 30.1383 35.8585C30.6131 34.6994 31.4789 33.5613 32.7357 32.4441C34.0065 31.3129 34.8514 30.3982 35.2704 29.7C35.6893 28.9878 35.8988 28.2406 35.8988 27.4586C35.8988 25.0986 34.8095 23.9185 32.631 23.9185C31.5976 23.9185 30.7667 24.2397 30.1383 24.8821C29.5238 25.5105 29.2026 26.3833 29.1747 27.5005H23.1C23.1279 24.8332 23.9868 22.7455 25.6765 21.2373C27.3802 19.7291 29.6984 18.975 32.631 18.975C35.5916 18.975 37.8888 19.6942 39.5227 21.1325C41.1565 22.557 41.9735 24.5749 41.9735 27.1863C41.9735 28.3733 41.7082 29.4975 41.1775 30.5588C40.6468 31.6062 39.7182 32.7722 38.3915 34.057L36.6948 35.6699C35.6335 36.6894 35.026 37.8834 34.8724 39.2519L34.7886 40.5297H29.4261ZM28.8186 46.9605C28.8186 46.0249 29.1328 45.2568 29.7612 44.6563C30.4036 44.0419 31.2206 43.7346 32.2121 43.7346C33.2036 43.7346 34.0135 44.0419 34.6419 44.6563C35.2843 45.2568 35.6055 46.0249 35.6055 46.9605C35.6055 47.8822 35.2913 48.6433 34.6629 49.2438C34.0484 49.8443 33.2315 50.1445 32.2121 50.1445C31.1926 50.1445 30.3687 49.8443 29.7403 49.2438C29.1258 48.6433 28.8186 47.8822 28.8186 46.9605Z" fill="white"/>
        </svg>}
        ,{value: "Войти"
            , href: "/login"
            , icon: <svg width="66" height="60" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="33.0036" cy="32.8188" rx="32.289" ry="32.3322" fill="#FFC737"/>
                <path d="M36.9934 40.0859C42.5203 41.0584 47.1821 44.8246 49.2304 49.97C49.9897 51.8973 50.3075 53.7185 50.3075 56.1055V58.192L48.9479 59.023C39.1123 64.9994 26.9636 64.9994 17.0751 59.0407L15.6978 58.2097V55.9994C15.6978 53.4886 16.051 51.6674 16.9162 49.6164C18.9645 44.7893 23.3614 41.2352 28.5882 40.1567C30.0008 39.8738 35.5278 39.8207 36.9934 40.0859Z" fill="white"/>
                <path d="M36.5696 16.0742C38.3354 16.7108 39.6068 17.5595 40.9135 18.9387C42.9088 21.0428 43.9506 23.6243 43.9506 26.4534C43.9506 29.3885 42.8382 32.0408 40.6839 34.1626C37.8763 36.9563 33.7973 38.0172 30.0008 36.9563C27.4404 36.2313 24.7034 34.0742 23.4144 31.7579C21.5603 28.3984 21.6132 24.1901 23.5556 20.866C24.6857 18.9387 26.9989 16.976 29.1002 16.1803C30.6541 15.5968 31.3605 15.5084 33.4441 15.5615C34.9627 15.6145 35.6514 15.7206 36.5696 16.0742Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5593 0.0369538C23.0082 0.956401 18.064 2.91907 13.2257 6.47308C11.2127 7.95834 7.5751 11.6538 6.12714 13.7226C4.62621 15.8444 2.80743 19.3453 1.92453 21.8208C-3.14333 36.0899 2.04813 51.9327 14.55 60.3138C24.0147 66.6615 35.6867 67.7578 46.0696 63.2843C49.7954 61.6753 53.4507 59.1998 56.3113 56.3354C64.3103 48.3079 67.6654 36.8148 65.2109 25.7638C64.6105 23.0585 63.9219 21.1666 62.5799 18.4082C59.0659 11.2118 53.2388 5.65973 45.9637 2.56543C41.6198 0.708859 38.6709 0.107685 33.709 0.0192767C31.7136 -0.0160866 29.8595 0.00159049 29.5593 0.0369538ZM54.6691 11.4593C50.3252 7.0389 45.0631 4.19215 38.8475 2.90139C37.5761 2.63616 36.2694 2.54775 33.6207 2.49471C29.8242 2.44166 29.9302 2.42398 27.1755 2.93675C23.4673 3.62633 19.7062 5.14696 16.4571 7.2334C10.6123 11.0173 6.1448 16.8345 3.97286 23.4652C0.670808 33.5614 2.84275 44.4887 9.76469 52.746C11.0008 54.2313 12.7842 55.9818 13.0667 55.9818C13.1197 55.9818 13.2257 55.2038 13.2786 54.2666C13.6141 48.9621 16.7749 43.6046 21.4013 40.528C22.6904 39.6793 24.3326 38.8482 26.0101 38.247C26.275 38.141 26.0984 37.9465 25.0389 37.1861C19.4236 33.1724 17.8874 25.1096 21.6132 19.2746C23.0259 17.0467 25.551 14.9249 27.8818 13.9701C31.0603 12.6794 35.2099 12.7147 38.3354 14.0585C41.3019 15.3316 44.1625 18.2314 45.4163 21.2373C46.9172 24.8797 46.7229 29.1587 44.8865 32.6773C44.0213 34.3394 42.485 36.0899 40.9664 37.1861C39.9069 37.9465 39.7304 38.141 39.9952 38.247C44.2332 39.803 47.4293 42.2254 49.7248 45.6733C51.5083 48.3433 52.5324 51.3138 52.7267 54.3374C52.7797 55.2391 52.8856 55.9818 52.9562 55.9818C53.2388 55.9818 54.9516 54.302 56.2583 52.746C65.0167 42.2785 65.9525 27.4612 58.5538 16.2334C57.0706 14.0055 56.6114 13.422 54.6691 11.4593ZM40.9135 18.9387C39.6068 17.5595 38.3354 16.7108 36.5696 16.0742C35.6514 15.7206 34.9627 15.6145 33.4441 15.5615C31.3605 15.5084 30.6541 15.5968 29.1002 16.1803C26.9989 16.976 24.6857 18.9387 23.5556 20.866C21.6132 24.1901 21.5603 28.3984 23.4144 31.7579C24.7034 34.0742 27.4404 36.2313 30.0008 36.9563C33.7973 38.0172 37.8763 36.9563 40.6839 34.1626C42.8382 32.0408 43.9506 29.3885 43.9506 26.4534C43.9506 23.6243 42.9088 21.0428 40.9135 18.9387ZM49.2304 49.97C47.1821 44.8246 42.5203 41.0584 36.9934 40.0859C35.5278 39.8207 30.0008 39.8738 28.5882 40.1567C23.3614 41.2352 18.9645 44.7893 16.9162 49.6164C16.051 51.6674 15.6978 53.4886 15.6978 55.9994V58.2097L17.0751 59.0407C26.9636 64.9994 39.1123 64.9994 48.9479 59.023L50.3075 58.192V56.1055C50.3075 53.7185 49.9897 51.8973 49.2304 49.97Z" fill="white"/>
            </svg>}]
    

    return(
      <header className={n.mainTitle}>
          <div className={n.container}>
              <div className={n.menuTop}>
                  <nav>
                      <div className={n.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                          <span/>
                      </div>
                  </nav>
                  <div className={n.title}>
                      <h2>Хочу всё понять.</h2>
                      <p>эта идея создаёт ученых</p>
                  </div>
              </div>
              <p className={n.promo}>ИИС приглашает волонтёров и студентов в свои проекты,
                  с применением искусственного интеллекта
                  в исследовании нашей жизни.</p>

              <a href={"#section02"} className={n.scroll}>
                  <div className={n.left}></div>
                  <div className={n.right}></div>
              </a>
          </div>
          <Menu active={menuActive} setActive={setMenuActive} header={"Бургер меню"} items={items}/>
      </header>
  );
}

export default Header;

