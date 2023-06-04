const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'models');
const controllersDir = path.join(__dirname, 'controllers');
const template = fs.readFileSync(path.join(__dirname, 'template'), 'utf-8');

// Leer los archivos del directorio "models"
fs.readdir(modelsDir, (err, files) => {
  if (err) throw err;

  // Iterar sobre los archivos encontrados
  files.forEach(file => {
    
    // Obtener el nombre del modelo y el nombre del archivo sin extensión
    const modelName = file.split('.')[0];
    const controllerName = `${modelName}Controller`;

    // Leer la plantilla y reemplazar el marcador "<model>" con el nombre del modelo
    const controllerContent = template.replace(/<Models>/g, modelName);

    // Escribir el archivo de controlador en el directorio "controllers"
    const controllerPath = path.join(controllersDir, `${controllerName}.js`);
    fs.writeFile(controllerPath, controllerContent, err => {
      if (err) throw err;
      console.log(`${controllerName}.js generated`);
    });
  });
});
