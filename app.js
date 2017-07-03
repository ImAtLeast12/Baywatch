const app = {
    init(selectors){
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.handleSubmit.bind(this))
    },

    favFlick(flick, ev){
        const listItem = ev.target.closest('.flick')
        flick.fav = listItem.classList.toggle('fav')        
    },

    renderListItem(flick){
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id

        item
            .querySelector('.flick-name')
            .textContent = flick.name
        item 
            .querySelector('button.remove')
            .addEventListener('click',
            this.removeFlick.bind(this, flick)
            )

        item
            .querySelector('button.fav')
            .addEventListener('click',
            this.favFlick.bind(this,flick)
            )

        item 
            .querySelector('button.edit')
            .addEventListener('click',
            this.editFlickName.bind(this,flick)
            )

        item    
            .querySelector('button.up')
            .addEventListener('click',
            this.upVote.bind(this,flick)
            )
        item
            .querySelector('button.down')
            .addEventListener('click',
            this.downVote.bind(this,flick))

        return item
    },

    upVote(flick,ev){
        const index = this.flicks.indexOf(flick)
        if (index >= this.flicks.length){
            const temp = this.flicks[index]
            this.flicks[index] = this.flicks[index+1]
            this.flicks[index+1] = temp
            const listItem = ev.target.closest('.flick')
            this.list.insertBefore(listItem, listItem.previousSibling)
        }
    },
    
    downVote(flick,ev){
        //console.log('I voted')
        const index = this.flicks.indexOf(flick)
        if (index <= this.flicks.length){
            const temp = this.flicks[index]
            this.flicks[index] = this.flicks[index-1]
            this.flicks[index-1] = temp
            const listItem = ev.target.closest('.flick')
            this.list.insertBefore(listItem.nextSibling, listItem)
        }
    },

    removeFlick(flick,ev){
        //remove from the dom
        const listItem = ev.target.closest('.flick')
        listItem.remove()
        
        //remove from the array
        const i = this.flicks.indexOf(flick)
        this.flicks.splice(i,1)
        this.max--
    },
    handleSubmit(ev){
        ev.preventDefault()
        const f = ev.target
        const flick = {
            id: this.max + 1,
            name: f.flickName.value,
            fav: false,
        }
        this.flicks.unshift(flick)
        const listItem = this.renderListItem(flick)
        this.list.insertBefore(listItem, this.list.firstElementChild)
        this.max++
        f.reset()
    }, 

     editFlickName(flick,ev){
        let newFlickName = prompt("Enter Flick Name:", "Example: Baywatch");
        if (newFlickName == null || newFlickName == "") {
             alert("User cancelled the prompt.")
        } else {
            let listItem = ev.target.closest('.flick')
            listItem.remove()
            flick.name = newFlickName
            listItem = this.renderListItem(flick)
            this.list.insertBefore(listItem, this.list.childNodes[this.list.childNodes.length-2 - flick.id])
            //Why is it 2 I don't know dude I just found a patern that works
        }//things that are not working are the favoriting system
        //and I think their might be a bug somewhere else when doing some crazy stuff just typoing randomly
    },
}
const selectors = ('form#flick-form','#flick-list')

app.init({formSelector: 'form#flick-form',
            listSelector: '#flick-list',
            templateSelector:'.flick.template',})
