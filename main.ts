import { Command } from "command";
import { Input } from "prompt";
import figlet from 'figlet'

interface data {
  name?: string;
}

const data: data = {};

const { options } = await new Command()
  .name("Greeter")
  .description("Greet a name!")
  .version("1.0.0")
  .option("-n, --name <name:string>", "The name to greet!")
  .parse(Deno.args);

if (options.name) {
  data.name = options.name;
} else {
  const name: string = await Input.prompt({
    message: "What is your name? ",
    minLength: 2,
  });
  data.name = name;
}

console.log(await figlet(`Hello ${data.name}!`))

