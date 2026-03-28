CREATE TABLE classes (
	id UUID PRIMARY KEY,
	classname TEXT NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE students (
	id UUID PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT,
	birthday DATE,
	class_id UUID REFERENCES classes,
	created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE tests (
	id UUID PRIMARY KEY,
	name TEXT NOT NULL,
	time_limit INT,
	allowed_attempts SMALLINT DEFAULT 1,
	difficulty SMALLINT DEFAULT 0,
	created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE questions (
	id UUID PRIMARY KEY,
	question TEXT NOT NULL,
	answer TEXT NOT NULL,
	is_multiple_choice BOOLEAN NOT NULL,
	choices JSONB,
	test_id UUID REFERENCES tests
);
CREATE TABLE class_test (
	class_id UUID REFERENCES classes,
	test_id UUID REFERENCES tests
);
CREATE TABLE test_sessions (
	id UUID PRIMARY KEY,
	student_id UUID REFERENCES students,
	test_id UUID REFERENCES tests,
	created_at TIMESTAMPTZ NOT NULL,
	finished_at TIMESTAMPTZ,
	score FLOAT
);
CREATE TABLE student_test_answers (
	session_id UUID REFERENCES test_sessions,
	question_id UUID REFERENCES questions,
	answer TEXT,
	is_correct BOOLEAN DEFAULT false
);
CREATE TABLE lessons (
	id UUID PRIMARY KEY,
	name TEXT NOT NULL,
	contents JSONB,
	created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE class_lesson (
	class_id UUID REFERENCES classes,
	lesson_id UUID REFERENCES lessons
);