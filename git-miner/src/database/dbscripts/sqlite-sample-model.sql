DROP TABLE IF EXISTS "ca";
DROP TABLE IF EXISTS "fa";
DROP TABLE IF EXISTS "team";
DROP TABLE IF EXISTS "engineer";
DROP TABLE IF EXISTS "commits";
DROP TABLE IF EXISTS "features";
DROP TABLE IF EXISTS "file_change";
DROP TABLE IF EXISTS "file";
DROP TABLE IF EXISTS "functions";
DROP TABLE IF EXISTS "reports";

CREATE TABLE "commits" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "author_id"            INTEGER             NOT NULL,
   "reviewer_id"          INTEGER             NOT NULL,
   "feature_id"           INTEGER             NULL,
   "jira_id"              INTEGER             NULL,
   "message"              VARCHAR(20)         NULL
);

CREATE TABLE "ca" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "name"                 VARCHAR(40)         NOT NULL,
   "tribe"                VARCHAR(20)         NOT NULL
);

CREATE TABLE "fa" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "name"                 VARCHAR(40)         NOT NULL,
   "ca_id"                INTEGER             NOT NULL
);

CREATE TABLE "team" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "name"                 VARCHAR(40)         NOT NULL,
   "fa_id"                INTEGER         NOT NULL
);

CREATE TABLE "engineer" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "name"                 VARCHAR(40)         NOT NULL,
   "email"                VARCHAR(40)         NOT NULL,
   "team_id"              INTEGER         NOT NULL
);

CREATE TABLE "reports" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "feature_id"           INTEGER         NOT NULL,
   "function_id"          INTEGER         NOT NULL
);

CREATE TABLE "functions" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "name"                 VARCHAR(40)         NOT NULL,
   "description"          VARCHAR(40)         NOT NULL
);

CREATE TABLE "features" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "name"                 VARCHAR(40)         NOT NULL,
   "description"          VARCHAR(40)         NOT NULL,
   "release"              VARCHAR(40)         NULL
);

CREATE TABLE "file_change" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "commit_id"            INTEGER             NOT NULL,
   "file_id"              INTEGER             NOT NULL,
   "type_id"              INTEGER             NULL,
   "loc"                  INTEGER             NULL
);


CREATE TABLE "file" (
   "id"                   INTEGER             NOT NULL PRIMARY KEY,
   "name"                 VARCHAR(40)         NOT NULL,
   "project"              VARCHAR(40)         NOT NULL,
   "path"                 VARCHAR(40)         NULL,
   "loc"                  VARCHAR(40)         NULL,
   "type_id"              INTEGER             NULL
);


-- DROP TABLE IF EXISTS "Commits";

-- CREATE TABLE "Commits" (
--    "Id"                   INTEGER             NOT NULL PRIMARY KEY,
--    "Message"            VARCHAR(40)         NOT NULL,
--    "Author"             VARCHAR(40)         NOT NULL,
--    "FeatureId"                 VARCHAR(40)         NULL,
--    "Loc"              VARCHAR(40)         NULL,
--    "reviewer"                VARCHAR(20)         NULL
-- );


-- DROP TABLE IF EXISTS "Commits";

-- CREATE TABLE "Commits" (
--    "Id"                   INTEGER             NOT NULL PRIMARY KEY,
--    "Message"            VARCHAR(40)         NOT NULL,
--    "Author"             VARCHAR(40)         NOT NULL,
--    "FeatureId"                 VARCHAR(40)         NULL,
--    "Loc"              VARCHAR(40)         NULL,
--    "reviewer"                VARCHAR(20)         NULL
-- );


-- DROP TABLE IF EXISTS "Commits";

-- CREATE TABLE "Commits" (
--    "Id"                   INTEGER             NOT NULL PRIMARY KEY,
--    "Message"            VARCHAR(40)         NOT NULL,
--    "Author"             VARCHAR(40)         NOT NULL,
--    "FeatureId"                 VARCHAR(40)         NULL,
--    "Loc"              VARCHAR(40)         NULL,
--    "reviewer"                VARCHAR(20)         NULL
-- );




