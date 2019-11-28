import Mock from 'mockjs'

module.exports = Mock.mock({
    'list|30':[{
        'id|+1':1,
        'title':'@ctitle',
        'img':'@image("100X150","@color","@ctitle")',
        'content':'@cparagraph'
    }]
})