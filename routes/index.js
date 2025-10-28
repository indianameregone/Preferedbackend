import XlsxPopulate from 'xlsx-populate'

const fullBase = async (req,res)=> {
    const workbook = await XlsxPopulate.fromFileAsync('./full base.xlsx')
    const value = workbook.sheet('Sheet1').usedRange().value()
    res.json(value)
}

const tickets = async(req,res) => {
    const workbook = await XlsxPopulate.fromFileAsync('./Tickets.xlsx')
    const value = workbook.sheet('query (1)').usedRange().value()
    res.json(value)
}
export  {tickets,fullBase}