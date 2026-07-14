SELECT
mh.user_id  as user_id,
mh.id as match_id,
m.f_name as first_name,
m.phone as phone,
mh.started_at as game_started_at,
mh.game_end_at as game_end_at,
mh.min as min,
result as result,
 mh.total_amount as total_amount

 from match_history mh
 join members m on m.id=mh.user_id 
 where mh.created_at >= now() - INTERVAL 3 MONTH ;
