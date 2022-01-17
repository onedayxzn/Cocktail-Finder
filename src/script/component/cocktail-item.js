class CocktailItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set cocktail(cocktail) {
    this._cocktail = cocktail;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
                   
               }

               .flex-container {
                    display: flex;
                }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: auto;
                   background-color: #FFF3E4;
               }
               .fan-art-cocktail {
                   width: 20%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
                   border-radius: 10px;
               }
              
               .cocktail-info {
                   padding: 24px;
               }
              
               .cocktail-info > h2 {
                   font-weight: lighter;
                   color: #483434;
               }
              
               .cocktail-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10;
                   cursor: default;
               }

               h2 > span {
                    color: #6B4F4F;
                    font-size: 12pt;
                    float:right;
               }

               h2{
                   cursor: default;
               }

               span{
                   cursor: default;
               }

               @media screen and (max-width: 550px){
                .flex-container {
                    display: block;
                }
                .fan-art-cocktail {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 10px;
                }

                .cocktail-info > h2 {
                    color: #483434;
                    font-size: 16pt;
                }
                h2 > span {
                    color: #6B4F4F;
                    font-size: 12pt;
                    float:right;
               }
         
            }

           </style>
           <div class="flex-container"> 
                <img class="fan-art-cocktail" src="${this._cocktail.strDrinkThumb}" alt="Fan Art">
                <div class="cocktail-info">
                    <h2>${this._cocktail.strDrink}<span>${this._cocktail.strCategory}</span></h2>
                    <p>${this._cocktail.strInstructions}</p>
                </div>
           </div>`;
  }
}

customElements.define("cocktail-item", CocktailItem);
