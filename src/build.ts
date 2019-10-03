/* eslint-disable import/no-extraneous-dependencies */
import fs from "fs";
import got from "got";
import path from "path";
import yaml from "js-yaml";

const replaceToValidStr = (str: string) => {
  return str
    .replace(/ /g, "")
    .replace(/-/g, "")
    .replace(/'/g, "")
    .replace(/^1/g, "One")
    .replace(/#/g, "sharp")
    .replace(/\*/g, "aster")
    .replace(/\+/g, "plus");
};

const linguist = "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml";
got(linguist).then(response => {
  const definitions = yaml.load(response.body);

  const colorDefs: { color: string; language: string }[] = [];
  Object.keys(definitions).forEach(language => {
    if (definitions[language].color) {
      colorDefs.push({ language, color: definitions[language].color });
    }
  });

  const colors: string[] = [];
  const exports: string[] = [];

  colorDefs.forEach(def => {
    colors.push(`const ${replaceToValidStr(def.language)} = "${def.color}";`);
    exports.push(replaceToValidStr(def.language));
  });

  const source = `
${colors.join("\n")}

export {
${exports.map(w => `  ${w}`).join(",\n")}
};
  `.trim();

  fs.writeFileSync(path.join(__dirname, "colors.ts"), source);
});
