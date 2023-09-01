export class UserInfo {
  constructor({ nameProfileSelector, aboutProfileSelector, avatarProfileSelector }) {
    this.nameElement = document.querySelector(nameProfileSelector);
    this.aboutElement = document.querySelector(aboutProfileSelector);
    this.avatarElement = document.querySelector(avatarProfileSelector)
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

  setUserAvatar(userData) {
    this.avatarElement.src = userData.avatar;
  }
}
