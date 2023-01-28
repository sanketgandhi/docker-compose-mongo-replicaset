// check replica-set status
rs.status();
// create mongo root user
db.createUser({ user: "admin", pwd: "admin", roles: [{ role: "root", db: "admin" }] });
