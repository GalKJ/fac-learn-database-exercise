-- BEGIN;

-- INSERT INTO tasks VALUES 
--     (4, 'Create my first todo', '2023-01-20 12:00:00'),
--     (5, 'Buy oat milk', '2023-01-20 12:01:00'),
--     (6, 'Go running and code', '2023-01-20 12:02:00')
-- ON CONFILCT(id) DO NOTHING;

-- COMMIT;

BEGIN;

INSERT INTO tasks VALUES
  (1, 'Create my first todo', '2022-09-16 01:01:01'),
  (2, 'Buy milk', '2022-09-16 11:10:07'),
  (3, 'Become a 10x developer', '2022-09-16 23:59:59'),
  (4, 'Create my first todo', '2023-01-20 12:00:00'),
  (5, 'Buy oat milk', '2023-01-20 12:01:00'),
  (6, 'Go running and code', '2023-01-20 12:02:00')
ON CONFLICT(id) DO NOTHING;

COMMIT;