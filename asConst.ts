const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

// * for using the as const the UserRoles every key becomes readonly

/*  
{
  readonly   Admin: "Admin",
  readonly   Editor: "Editor",
   readonly  Viewer: "Viewer",
}
*/

//! because without this js object value can be easily manipulated
//* next step is we have to use the keyof so that the key looks like this "Admin"|"Editor"|"Viewer"
//* last step to we have to check the type so use typeof (typeof work on run time)
// ! Fixed literal type are not string "ADMIN"

// to use this we need typeof operator and keyof operator
const canEdit = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

// ! what if our key and value not same in this case we have to use this

const UserRoles2 = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

//**  here we have to put this keyof typeof UserRoles2 into an array because by using a object string notation we can extract the value 
// ! example typeof UserRoles2[keyof typeof UserRoles2] = "ADMIN"

const canEdit2 = (role: typeof UserRoles2[keyof typeof UserRoles2]) => {
  if (role === UserRoles2.Admin || role === UserRoles2.Editor) {
    return true;
  } else {
    return false;
  }
};
console.log(canEdit2(UserRoles2.Admin));
