import Snowman from "./Snowman";
import { render, fireEvent } from "@testing-library/react";

import "./Snowman.css";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

it("matches snapshot", function () {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});

it("ends game after max wrong guesses ", function () {
  const { container } = render(<Snowman />);

  const bButton = container.querySelector("button[value='b']");
  fireEvent.click(bButton);
  const cButton = container.querySelector("button[value='c']");
  fireEvent.click(cButton);
  const jButton = container.querySelector("button[value='j']");
  fireEvent.click(jButton);
  const dButton = container.querySelector("button[value='d']");
  fireEvent.click(dButton);
  const kButton = container.querySelector("button[value='k']");
  fireEvent.click(kButton);
  const qButton = container.querySelector("button[value='q']");
  fireEvent.click(qButton);

  expect(container.querySelector("button[value='a']")).not.toBeInTheDocument();
  // TODO: add test for you lose.
});
