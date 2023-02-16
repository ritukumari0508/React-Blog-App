const initialState = [
    {
        id:0,
        title:"React",
        content:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug",
        imagelink:"https://th.bing.com/th/id/OIP.STtkVBn8Iu6FQtzoU__2IQHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
        id:1,
        title:"Redux",
        content:"Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow. Redux solves this problem by managing application’s state with a single global object called Store. Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier.",
        imagelink:"https://th.bing.com/th/id/OIP.DDWd4QBc1TPwoNIz-YaZDgHaDP?w=276&h=153&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
];

const BlogReducer = (state=initialState,action) => {
    switch(action.type)
    {
      case "ADD_BLOG":
          state = [...state,action.payload];
          return state;  
      case "UPDATE_BLOG":
          const updatestate = state.map(blog => blog.id === action.payload.id ? action.payload : blog);
          state = updatestate;
          return state;
          
      case "DELETE_BLOG":
          const filterblogs = state.filter((blog) => blog.id !== action.payload? blog : null);
          state = filterblogs;
          return state;    
       
      default:
          return state;
    }
};


export default BlogReducer;