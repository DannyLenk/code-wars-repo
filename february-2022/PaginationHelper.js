"use strict"


      // TODO: complete this object/class

      // The constructor takes in an array of items and a integer indicating how many items fit within a single page
      function PaginationHelper(collection, itemsPerPage){
         this.collection = collection;
         this.itemsPerPage = itemsPerPage;
      }

      let helper = new PaginationHelper(['a','b','c','d','e','f','g','h','i','1', '2','3','4','5','6','8','9','10','11','23'], 3);

      // returns the number of items within the entire collection
      PaginationHelper.prototype.itemCount = function() {
         return this.collection.length;
      }

      // returns the number of pages
      PaginationHelper.prototype.pageCount = function() {
         return Math.ceil(this.collection.length / this.itemsPerPage);
      }

      // returns the number of items on the current page. page_index is zero based.
      // this method should return -1 for pageIndex values that are out of range
      PaginationHelper.prototype.pageItemCount = function(pageIndex) {

         if (pageIndex < 0) {
            return -1;
         }

         if (this.collection.length < 1) {
            return -1;
         }

         pageIndex++;
         const pagesNum = this.collection.length / this.itemsPerPage;
         const itemsAfter = pagesNum - pageIndex;

         return (itemsAfter > 0) ? Math.ceil(this.itemsPerPage) 
            : (itemsAfter < -1) ? -1
            : Math.ceil(this.itemsPerPage + itemsAfter * this.itemsPerPage)
      }

      // determines what page an item is on. Zero based indexes
      // this method should return -1 for itemIndex values that are out of range
      PaginationHelper.prototype.pageIndex = function(itemIndex) {

         if (itemIndex > this.collection.length || itemIndex < 0) {
            return -1;
         }
         if (this.collection.length < 1) {
            return -1;
         }

         let counter = 0;
         do {
            itemIndex -= this.itemsPerPage;
            counter++;
         } while (itemIndex > 0);

         return counter - 1;
      }
