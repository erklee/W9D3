import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    
    this.toggleButton = toggleButton

    this.toggleButton.addEventListener('click', handleClick.bind(this)) 
  }

  async handleClick(event) {
    // Your code here
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() { // getter ==> see links for syntax
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) { //setter
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}