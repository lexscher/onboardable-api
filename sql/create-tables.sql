CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  about_me TEXT,
  street VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip VARCHAR(255),
  birth_date VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE "page" (
  id SERIAL PRIMARY KEY,
  page_number INTEGER,
  customizable BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE "component" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE "field" (
  id SERIAL PRIMARY KEY,
  component_id INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT fk_component
      FOREIGN KEY(component_id)
	      REFERENCES component(id)
	      ON DELETE SET NULL
);

CREATE TABLE "admin_config" (
  id SERIAL PRIMARY KEY,
  page_id INTEGER,
  component_id INTEGER,
  component_position INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT fk_page
    FOREIGN KEY(page_id)
	    REFERENCES page(id)
	    ON DELETE SET NULL,
  CONSTRAINT fk_component
    FOREIGN KEY(component_id)
	    REFERENCES component(id)
	    ON DELETE SET NULL
);
