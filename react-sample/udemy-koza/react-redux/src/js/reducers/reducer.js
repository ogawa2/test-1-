const initialState = { 
   groupList: [
     {
     id: "inbox",
     label: "受信箱",
     },
     {
       id: "group-1",
       label: "グループ1",
     },
   ],
   todoList: {
     "inbox":  [
                 {id: "item-1", label:"Todo1", completed: false},
                 {id: "item-2", label:"Todo2", completed: false},
                 {id: "item-3", label:"Todo3", completed: false}
               ],

     "group-1": [
                 {id: "item-4", label:"Todo4", completed: false},
                 {id: "item-5", label:"Todo5", completed: false},
                 {id: "item-6", label:"Todo6", completed: false}
               ]
   }, 
   todoCount: 6,
   groupCount: 1,
   selectedGroup: "inbox"
 }

const reducer = (state = initialState, action) => {
   return state;
}

export default reducer;