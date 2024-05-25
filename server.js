document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
      var data = new Uint8Array(event.target.result);
      var workbook = XLSX.read(data, { type: "array" });

      var firstSheetName = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[firstSheetName];

      var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      console.log(jsonData);

      var output = document.getElementById("output");
      extractValues(jsonData);
    };

    reader.onerror = function (event) {
      console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsArrayBuffer(file);
  });

function extractValues(data) {
  if (data.length > 0) {
    var headers = data[0];
    console.log("Headers:", headers);

    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      console.log("Row " + i + ":", row);

      var name = row[0];
      var score = row[1];
      let grade = 0;
      // switch(score){
      //     case score <= 49:
      //         grade = 0.0;
      //     case score <= 54:
      //         grade = 1.0;
      //     case score <= 59:
      //         grade = 1.5;
      //     case score <= 64:
      //         grade = 2.0;
      //     case score <= 69:
      //         grade = 2.5;
      //     case score <= 74:
      //         grade = 3.0;
      //     case score <= 79:
      //         grade = 3.5;
      //     case score >= 80:
      //         grade = 4.0;
      //  }
      console.log("Name:", name);
      console.log("Score:", score);
      console.log(typeof grade);
      var extractedValuesOutput = document.getElementById("extractedValues");
      extractedValuesOutput.innerHTML += `<p>Name: ${name}, Score: ${score}, Grade: ${grade}</p>`;
    }
  }
}
