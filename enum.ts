// set of fixed lateral set it one place

//**  enum is a type and we can use this type as a value, this is the power of enum type

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

console.log(canEdit(UserRoles.Editor))
