package com.icesoft.msdb.domain.stats;

import java.time.LocalDate;

public class Result {

	Long eventEditionId;
	Long entryId;
	Integer order;
	String eventName;
	String sessionName;
	Integer year;
	LocalDate eventDate;
	Integer position;
	Integer gridPosition;
	Integer lapsLed;
	Integer lapsCompleted;
	Boolean retired;
	String retirementCause;
	Boolean grandChelem;
	Boolean pitlaneStart;
	Long poleLapTime;
	Long raceFastLapTime;
	
	public Long getEventEditionId() {
		return eventEditionId;
	}
	public void setEventEditionId(Long eventEditionId) {
		this.eventEditionId = eventEditionId;
	}
	public Long getEntryId() {
		return entryId;
	}
	public void setEntryId(Long entryId) {
		this.entryId = entryId;
	}
	public Integer getOrder() {
		return order;
	}
	public void setOrder(Integer order) {
		this.order = order;
	}
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public String getSessionName() {
		return sessionName;
	}
	public void setSessionName(String sessionName) {
		this.sessionName = sessionName;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public LocalDate getEventDate() {
		return eventDate;
	}
	public void setEventDate(LocalDate eventDate) {
		this.eventDate = eventDate;
	}
	public Integer getPosition() {
		return position;
	}
	public void setPosition(Integer position) {
		this.position = position;
	}
	public Integer getGridPosition() {
		return gridPosition;
	}
	public void setGridPosition(Integer gridPosition) {
		this.gridPosition = gridPosition;
	}
	public Integer getLapsLed() {
		return lapsLed;
	}
	public void setLapsLed(Integer lapsLed) {
		this.lapsLed = lapsLed;
	}
	public Integer getLapsCompleted() {
		return lapsCompleted;
	}
	public void setLapsCompleted(Integer lapsCompleted) {
		this.lapsCompleted = lapsCompleted;
	}
	public Boolean getRetired() {
		return retired;
	}
	public void setRetired(Boolean retired) {
		this.retired = retired;
	}
	public Boolean getGrandChelem() {
		return grandChelem;
	}
	public void setGrandChelem(Boolean grandChelem) {
		this.grandChelem = grandChelem;
	}
	public Boolean getPitlaneStart() {
		return pitlaneStart;
	}
	public void setPitlaneStart(Boolean pitlaneStart) {
		this.pitlaneStart = pitlaneStart;
	}	
	public String getRetirementCause() {
		return retirementCause;
	}
	public void setRetirementCause(String retirementCause) {
		this.retirementCause = retirementCause;
	}
	public Long getPoleLapTime() {
		return poleLapTime;
	}
	public void setPoleLapTime(Long poleLapTime) {
		this.poleLapTime = poleLapTime;
	}
	public Long getRaceFastLapTime() {
		return raceFastLapTime;
	}
	public void setRaceFastLapTime(Long raceFastLapTime) {
		this.raceFastLapTime = raceFastLapTime;
	}
	
	@Override
	public String toString() {
		return "Result [eventEditionId=" + eventEditionId + ", entryId=" + entryId + ", eventName=" + eventName
				+ ", year=" + year + ", eventDate=" + eventDate + ", position=" + position + ", gridPosition="
				+ gridPosition + ", lapsLed=" + lapsLed + ", lapsCompleted=" + lapsCompleted + ", retired=" + retired
				+ ", grandChelem=" + grandChelem + ", pitlaneStart=" + pitlaneStart + "]";
	}
}