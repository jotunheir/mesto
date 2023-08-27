export class UserInfo {
  constructor({ nameProfileSelector, aboutProfileSelector }) {
    this.nameElement = document.querySelector(nameProfileSelector);
    this.aboutElement = document.querySelector(aboutProfileSelector);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      about: this.aboutElement.textContent
    };
  }

  setUserInfo(userData) {
    this.nameElement.textContent = userData.name;
    this.aboutElement.textContent = userData.about;
  }
}
