

import { defineStore } from 'pinia'

// Define the 'shopping' store
export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            cartItems: [], // List of items in the shopping cart
            cartFavorite: [], // List of items in the favorites
            products:[
  
    
              {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere ",
                "body": "reprehenderit molestiae ut ut quas totamnnostrum rerum est autem sunt rem eveniet architecto",
                "image" : "https://picsum.photos/id/60/200/300",
                "price" : "17"
              },
              {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum  beatae ea dolores nequenfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                "image" : "https://picsum.photos/id/119/200/300",
                "price" : "809"
              },
              {
                "userId": 1,
                "id": 3,
                "title": "ea molestias",
                "body": "et iusto sed  ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                "image" : "https://picsum.photos/id/157/200/300",
                "price" : "500 "
              },
              {
                "userId": 1,
                "id": 4,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatemnquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
                "image" : "https://picsum.photos/id/201/200/300",
                "price" : "109.5"
              },
              {
                "userId": 1,
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam  possimus esse voluptatibus quis\nest aut tenetur dolor neque",
                "image" : "https://picsum.photos/id/250/200/300",
                "price" : "92.06"
              },
              {
                "userId": 1,
                "id": 6,
                "title": "dolorem eum ",
                "body": "ut aspernatur corporis harum nihil quisea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
                "image" : "https://picsum.photos/id/435/200/300",
                "price" : "89"
              },
              {
                "userId": 1,
                "id": 7,
                "title": "magnam facilis autem",
                "body": "quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
                "image" : "https://picsum.photos/id/486/200/300",
                "price" : "205"
              },
              {
                "userId": 1,
                "id": 8,
                "title": "dolorem dolore est ipsam",
                "body": "dignissimos aperiam dolorem qui eum\nfacilis voluptatum modi aut vitae",
                "image" : "https://picsum.photos/id/490/200/300",
                "price" : "105"
              },
              {
                "userId": 1,
                "id": 9,
                "title": "nesciunt  accusantium",
                "body": " nobis\net est aut quod aut provident voluptas autem voluptas",
                "image" : "https://picsum.photos/id/535/200/300",
                "price" : "49"
              },
              {
                "userId": 1,
                "id": 10,
                "title": "optio molestias",
                "body": "repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
                "image" : "https://picsum.photos/id/625/200/300",
                "price" : "65"
              },
              {
                "userId": 2,
                "id": 11,
                "title": "et ea vero ",
                "body": "eveniet qui voluptatibus\naccusamus in eum beatae incidunt\nut animi commodi",
                "image" : "https://picsum.photos/id/615/200/300",
                "price" : "20"
              },
              {
                "userId": 2,
                "id": 12,
                "title": "in est dolorem",
                "body": " voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
                "image" : "https://picsum.photos/id/241/200/300",
                "price" : "55"
              },
              {
                "userId": 2,
                "id": 13,
                "title": "dolorum ut",
                "body": " cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
                "image" : "https://picsum.photos/id/236/200/300",
                "price" : "25"
              },
            
            
            ],
        }
    },
    getters: {
        countCartItems() { // Get the count of items in the shopping cart
            return this.cartItems.length;
        },
        getCartItems() { // Get the items in the shopping cart
            return this.cartItems;
        },
        getCartFavorites() { // Get the items in the favorites
          return this.cartFavorite;
        }

    },
    actions: {
        addToCart(item) { // Add an item to the shopping cart
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.products[index].quantity += 1;
            } else {
                item.quantity = 1;
                this.cartItems.push(item);
            }
        },
        addToFavorite(item) { // Add an item to the favorites
            let index = this.cartFavorite.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.products[index].quantity += 1;
            } else {
                item.quantity = 1;
                this.cartFavorite.push(item);
            }
        },
        incrementQ(item) { // Increment the quantity of an item in the shopping cart
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;
            }
        },
        decrementQ(item) { // Decrement the quantity of an item in the shopping cart
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity -= 1;
                if (this.cartItems[index].quantity === 0) {
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
            }
        },
        removeFromCart(item) { // Remove an item from the shopping cart
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
        },
        removeFavoriteCart(item) { // Remove an item from the favorites
            this.cartFavorite = this.cartFavorite.filter(product => product.id !== item.id);
        }
    },
})