import xlsx from 'xlsx'

export class ExcelUtils{

    // file path of Excel file and sheet name:

    static getExcelData(filePath:string, sheetName:string){

        try{
            const workbook = xlsx.readFile(filePath)
            const sheet = workbook.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data
        }    
        catch(error){
            console.log(error)
        }
    }
}