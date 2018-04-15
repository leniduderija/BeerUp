export class User { 

  constructor(
    public fullname:      string,
    public email:         string,
    public phoneNumber:   string,
    public rsvp:          string,
    public comment:       string,
    public subscribe:     string,
    public reminder:      boolean
  ) { }
}
