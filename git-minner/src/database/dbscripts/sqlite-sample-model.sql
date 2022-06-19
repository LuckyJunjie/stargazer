DROP TABLE IF EXISTS "Commits";

CREATE TABLE "Commits" (
   "Id"                   INTEGER             NOT NULL PRIMARY KEY,
   "Message"            VARCHAR(40)         NOT NULL,
   "Author"             VARCHAR(40)         NOT NULL,
   "FeatureId"                 VARCHAR(40)         NULL,
   "Loc"              VARCHAR(40)         NULL,
   "reviewer"                VARCHAR(20)         NULL
);


