import React from 'react'
import ReactDOM from 'react-dom'

function component(){
    return(
        React.createElement('ul',{},
            React.createElement('li',{},'Favorite Colors',
                React.createElement('ol',{},React.createElement('li',{},'Green'),
                React.createElement('li',{},'Blue'),
                React.createElement('li',{},'Red')
                )
            ),
            React.createElement('li',{},'Favorite Music',
                React.createElement('ol',{},React.createElement('li',{},'Regina Spektor'),
                React.createElement('li',{},'Antonín Dvořák'),
                React.createElement('li',{},'Radiohead')
                )
            ),
            React.createElement('li',{},'Favorite Food',
                React.createElement('ol',{},React.createElement('li',{},'Pizza'),
                React.createElement('li',{},'Ceasar Salad'),
                React.createElement('li',{},'Gnocchi')
                )
            ),
            React.createElement('li',{},'Favorite Websites',
                React.createElement('ol',{},
                React.createElement('li',{},React.createElement('a',{href:'https://www.google.com/',target:'_blank'},'Google')),
                React.createElement('li',{},React.createElement('a',{href:'//www.facebook.com'},'Facebook')),
                React.createElement('li',{},React.createElement('a',{href:'//www.instagram.com'},'Instagram'))
                )
            )

        )
    )
}

    
        
        
        
    
        
        
        
    
        // 
        // 
        // 
    

export default component;