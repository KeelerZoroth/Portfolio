import mammoth from 'mammoth';
import fs from 'fs';

fs.readFile('./public/Public Resume.docx', function(err, buffer) {
    if (err) {
        // Handle error, e.g., file not found
        console.error(err);
        return;
    }

    mammoth.extractRawText({ buffer: buffer })
        .then(function(result) {
            const text = result.value; // The raw text content of the docx file
            const structeredData = JSON.stringify({
                text: text
            })
            fs.writeFile("./public/resumeData.json", structeredData, (err) => {
                if(err){
                    console.log(err)
                }
            })
        })
        .catch(function(error) {
            // Handle error during conversion
            console.error(error);
        });
});