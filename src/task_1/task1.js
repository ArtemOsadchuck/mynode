import { stdin, stdout } from "node:process";

export const reverseCLI = () => {
  console.log("Please start print");
  stdin.on("data", (data) => {
    stdout.write(
      "reverse: " +
        data.toString().split("").reverse().join(" qwe") +
        "\n \n print new command \n"
    );
  });
};

reverseCLI();
