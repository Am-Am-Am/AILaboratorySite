import React from "react";
import n from "./profileSection.module.css";
import ProjectComponent from "../../ProjectComponent/projectComponent";

const ProfileSection = () => {
  return(
      <section className={n.mainMenu}>
          <div className={n.containerMenu}>
              <div className={n.userProfile}>
                  <h1 className={n.name}>Иванов Иван Иванович</h1>
                  <p>УрФУ имени первого Президента России Б.Н.Ельцина
                      Программная Инженерия, 2й курс, РИ-290034</p>
                  <br/>
                      <p>Почта: email@mail.ru</p>
                      <p>Номер: +79123456789</p>
                      <p>@telegram_profile</p>
                      <a className={n.btnn} href="settingsProfile.html">НАСТРОИТЬ</a>
              </div>
              <h2 className={n.listFullProjects}>ПРОЕКТЫ</h2>
              <div className={n.projectsPanel}>
                  <ProjectComponent
                      name = "Разработка динамической карты погоды на 3D-модели Земли"
                      description = "В данном проекте нужно связать нашу БД с заготовленной 3D-моделю Земли,
            чтобы отображать на ней облачность, температуру и осадки"
                      postgreSQLStyle = {n.PostreSQL}
                      postgreSQL = {1}
                      pythonStyle = {n.Python}
                      python ={true}
                      autodeskMaya2020Style = {n.AutodeskMaya2020}
                      autodeskMaya2020 = "AutodeskMaya2020"
                      manCount = "4 / 5"
                      //Передача информации в компоненту
                      //Style - передаём название css класса, для отображения кнопки
                      content = "1ddd"
                  />
              </div>
          </div>
      </section>
  );
}

export default ProfileSection;