package com.icesoft.msdb.repository;

import static org.hibernate.jpa.QueryHints.HINT_FETCH_SIZE;

import java.util.stream.Stream;

import javax.persistence.QueryHint;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.icesoft.msdb.domain.Racetrack;

/**
 * Spring Data JPA repository for the Racetrack entity.
 */
@Repository
public interface RacetrackRepository extends JpaRepository<Racetrack,Long> {
	
	Racetrack findByName(String name);

	@QueryHints(value = @QueryHint(name = HINT_FETCH_SIZE, value = "" + Integer.MIN_VALUE))
	@Query(value = "select r from Racetrack r")
	@Transactional(readOnly=true)
	Stream<Racetrack> streamAll();
	
}
