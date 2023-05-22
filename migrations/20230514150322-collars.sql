CREATE TABLE IF NOT EXISTS countries (
    country_id INT GENERATED ALWAYS AS IDENTITY,
    capital VARCHAR(255) NOT NULL,
    country_name VARCHAR(255) NOT NULL,

    PRIMARY KEY(country_id)
);
-- +migrate Down
DROP TABLE IF EXISTS countries;