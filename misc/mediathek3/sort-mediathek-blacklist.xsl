<?xml version="1.0"?>
<!--
saxon -s:mediathek.xml -o:mediathek-sorted.xml -xsl:sort-mediathek-blacklist.xsl
-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

  <xsl:output method="xml" version="1.0" encoding="UTF-8"/>

  <xsl:template match="Mediathek">
    <xsl:text>&#10;</xsl:text>
    <Mediathek>
    <xsl:text>&#10;</xsl:text>
    <xsl:text>&#10;</xsl:text>
    <xsl:comment> Alphabetically sorted Blacklist </xsl:comment>
    <xsl:text>&#10;</xsl:text>
    <xsl:for-each select="Blacklist">
      <xsl:sort select="black-thema"/>
      <Blacklist><black-thema><xsl:value-of select="black-thema"/></black-thema></Blacklist>
      <xsl:text>&#10;</xsl:text>
    </xsl:for-each>
    <xsl:text>&#10;</xsl:text>
    <xsl:text>&#10;</xsl:text>
    <xsl:apply-templates select="*[not(self::Blacklist)]"/>
    <xsl:text>&#10;</xsl:text>
    </Mediathek>
  </xsl:template>

  <xsl:template match="@*|node()">
    <xsl:if test="name()='Ersetzungstabelle'"><xsl:text>&#10;</xsl:text></xsl:if>
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
    <xsl:if test="name()='Ersetzungstabelle'"><xsl:text>&#10;</xsl:text></xsl:if>
    <xsl:if test="name()='Programm'"><xsl:text>&#10;</xsl:text></xsl:if>
    <xsl:if test="name()='Programmset'"><xsl:text>&#10;</xsl:text></xsl:if>
    <xsl:if test="name()='system'"><xsl:text>&#10;&#10;</xsl:text></xsl:if>
  </xsl:template>

</xsl:stylesheet>