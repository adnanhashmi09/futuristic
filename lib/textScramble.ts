class TextScramble {
  chars: string;
  el: any;
  queue: any;
  frame: any;
  resolve: any;
  frameRequest: any;
  nodeArray: any;

  constructor(el: any, nodeArray: any) {
    this.el = el;
    this.nodeArray = nodeArray;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldText = (this.nodeArray[0] as HTMLElement).innerHTML.toString();
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `${char}`;
      } else {
        output += from;
      }
    }
    /* this.el.current.innerHTML = output; */
    /* [...this.el.current.querySelectorAll("text")].forEach((txt) => { */
    /*   txt.innerHTML = output; */
    /* }); */

    this.nodeArray.forEach((txt: any) => {
      txt.innerHTML = output;
    });

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

export default TextScramble;
