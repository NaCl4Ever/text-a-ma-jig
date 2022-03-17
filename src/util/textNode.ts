enum Side {
    LEFT,
    RIGHT
}

export class textNode
{
  private _data: string = '';
  private _count: number = 0;
  private _left: textNode | null = null;
  private _right: textNode | null = null;

  constructor(data, count) {
    this._data = data;
    this._count = count;
  }
    public increment(){
         this._count = this._count + 1;
    }

    public setSide(side: Side,  node: textNode) {
        if(side === Side.LEFT) {
            this._left = node;
        }
        else if ( side === Side.RIGHT){
           this._right = node;
        }
    }

    get data() {
        return this._data;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right
    }

}
 

 function add(data)
  {
   
      // Create a new node and
      // populate its data part,
      // set cnt as 1 and left
      // and right children as null
      var newnode = new textNode(data, 1);
      return newnode;
  }
   
  // Function to add a node
  // to the Binary Tree in
  // level order
  export function addinlvlorder(root, data)
  {
   
      if (root == null)
      {
          return add(data);
      }
       
      // Use the queue data structure
      // for level order insertion
      // and push the root of tree to Queue
      var Q: textNode[] = [];
      Q.push(root);
   
      while (Q.length != 0)
      {
   
          var temp = Q[0];
          Q.shift();
   
          // If the character to be
          // inserted is present,
          // update the cnt
          if (temp.data == data)
          {
              temp.increment();
              break;
          }
           
          // If the left child is
          // empty add a new node
          // as the left child
          if (temp.left == null)
          {
              temp.setSide(Side.LEFT, add(data));
              break;
          }
          else
          {
              // If the character is present
              // as a left child, update the
              // cnt and exit the loop
              if (temp.left.data == data)
              {
                  temp.left.increment;
                  break;
              }
               
              // push the left child to
              // the queue for further
              // processing
              Q.push(temp.left);
          }
           
          // If the right child is empty,
          // add a new node to the right
          if (temp.right == null)
          {
             temp.setSide(Side.RIGHT, add(data));
              break;
          }
          else
          {
              // If the character is present
              // as a right child, update the
              // cnt and exit the loop
              if (temp.right.data == data)
              {
                  temp.right.increment();
                  break;
              }
               
              // push the right child to
              // the queue for further
              // processing
              Q.push(temp.right);
          }
      }
      
      return root;
    }
    
    
  export function printlvlorder(root)
  {
   
      // push the root to the queue
      var Q = [];
      Q.push(root);
   
      while (Q.length != 0)
      {
          var temp = Q[0];
           
          // If the cnt of the character
          // is more then one, display cnt
          if (temp.cnt > 1)
          {
              console.log((temp.data +""+ temp.cnt));
          }
           
          // If the cnt of character
          // is one, display character only
          else
          {
              console.log(temp.data);
          }
          Q.shift();
           
          // push the left child to
          // the queue for further
          // processing
          if (temp.left != null)
          {
              Q.push(temp.left);
          }
           
          // push the right child to
          // the queue for further
          // processing
          if (temp.right != null)
          {
              Q.push(temp.right);
          }
      }
  }

