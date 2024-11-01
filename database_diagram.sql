Table users {
  -- Firebase cloud storage uses id_first_last
  id integer [primary key]
  first_name varchar
  last_name varchar
  email varchar
  phone varchar
  role_id integer
}

Table web_roles {
  -- Participant, trip leader, or admin
  id integer [primary key]
  role_name varchar
}

Table trip_user {
  -- This includes both leader and user instances
  instance_id integer [primary key]
  trip_id integer
  user_id integer

  trip_role integer
}

Table trip_roles {
  id integer [primary key]
  role_name varchar
}

Table trips {
  -- Firebase cloud storage uses id_trip_name
  id integer [primary key]
  trip_name varchar unique
  planned_date datetime -- Editable before trip happens
  
  class varchar(1)
  price_override float
}

Table trip_classes {
  trip_class varchar(1) [primary key]
  link varchar
  price float
}

-- Each user has a role
Ref: users.role_id > web_roles.id
Ref: trip_user.trip_role > trip_roles.id

-- Multiple users/trips get mapped to eachother
Ref: trip_user.trip_id > trips.id
Ref: trip_user.user_id > users.id

Ref: trip_classes.trip_class < trips.class
